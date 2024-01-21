import {
  useCallback,
  useRef,
  type ReactNode,
  forwardRef,
  useImperativeHandle,
  type ForwardedRef,
  type RefAttributes,
} from 'react';
import { type FlatListProps, type ListRenderItemInfo } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import { type SwipeableProps } from 'react-native-gesture-handler/lib/typescript/components/Swipeable';
import Reanimated from 'react-native-reanimated';

type SwipeDirection = 'left' | 'right';

const SEPARATORS: ListRenderItemInfo<never>['separators'] = {
  highlight: () => {
    /* noop */
  },
  unhighlight: () => {
    /* noop */
  },
  updateProps: () => {
    /* noop */
  },
};

type Props<T> = FlatListProps<T> & {
  enableOpenMultipleRows?: boolean;
  renderLeftActions?: (item: T) => ReactNode;
  renderRightActions?: (item: T) => ReactNode;
  swipeableProps?: SwipeableProps;
};

type Ref<T> = {
  closeAllItems: VoidFunction;
  items: Optional<Nullable<Swipeable>>[];
  list: Nullable<Reanimated.FlatList<T>>;
};

type SwipeableFlatListForwardedRef<T> = ForwardedRef<Ref<T>>;

function SwipeableFlatListRender<T>(
  {
    data,
    enableOpenMultipleRows,
    keyExtractor,
    renderItem,
    renderLeftActions,
    renderRightActions,
    swipeableProps,
    ...rest
  }: Props<T>,
  ref: SwipeableFlatListForwardedRef<T>,
) {
  const openedRowIndex = useRef<Nullable<number>>(null);
  const itemsRefs = useRef<Optional<Nullable<Swipeable>>[]>([]);
  const listRefs = useRef<Reanimated.FlatList<T>>(null);

  useImperativeHandle(
    ref,
    () => ({
      closeAllItems: () => {
        itemsRefs.current.forEach(swipeable => {
          swipeable?.close();
        });
      },
      items: itemsRefs.current,
      list: listRefs.current,
    }),
    [],
  );

  const onSwipeableWillOpen = useCallback(
    (_directions: SwipeDirection, index: number) => {
      if (!enableOpenMultipleRows) {
        Object.values(itemsRefs.current).forEach((swipeable, i) => {
          if (i !== index && swipeable) {
            swipeable.close();
          }
        });
      }
    },
    [enableOpenMultipleRows],
  );

  const onSwipeableOpen = useCallback(
    (directions: SwipeDirection, swipeable: Swipeable, index: number) => {
      openedRowIndex.current = index;
      swipeableProps?.onSwipeableOpen?.(directions, swipeable);
    },
    [swipeableProps],
  );

  const renderSwipeableItem = useCallback(
    ({ index, item }: { index: number; item: T }) => {
      const leftAction = renderLeftActions ? () => renderLeftActions(item) : undefined;
      const rightAction = renderRightActions ? () => renderRightActions(item) : undefined;

      if (!renderItem) {
        return null;
      }

      return (
        <Swipeable
          {...swipeableProps}
          ref={ref => {
            itemsRefs.current[index] = ref;
          }}
          onSwipeableOpen={(directions, swipeable) => onSwipeableOpen(directions, swipeable, index)}
          onSwipeableWillOpen={directions => onSwipeableWillOpen(directions, index)}
          renderLeftActions={leftAction}
          renderRightActions={rightAction}>
          {renderItem({
            index,
            item,
            separators: SEPARATORS,
          })}
        </Swipeable>
      );
    },
    [
      onSwipeableOpen,
      onSwipeableWillOpen,
      renderItem,
      renderLeftActions,
      renderRightActions,
      swipeableProps,
    ],
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Reanimated.FlatList
        ref={listRefs}
        {...rest}
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderSwipeableItem}
      />
    </GestureHandlerRootView>
  );
}

const SwipeableFlatList = forwardRef(SwipeableFlatListRender) as <T>(
  props: Props<T> & RefAttributes<Ref<T>>,
) => ReturnType<typeof SwipeableFlatListRender>;

export {
  SwipeableFlatList,
  SwipeableFlatListForwardedRef,
  Props as SwipeableFlatListProps,
  Ref as SwipeableFlatListRef,
};
