import StorybookUI from '.storybook';
import { OptimizedScreen } from '@/components';
import { Env } from '@/constants/env';
import { ScreenIndex as ScreenIndexComponent } from '@/views';

function ScreenIndex() {
  return (
    <OptimizedScreen>
      <ScreenIndexComponent />
    </OptimizedScreen>
  );
}

const EntryPoint = Env.STORYBOOK_ENABLED ? StorybookUI : ScreenIndex;

export default EntryPoint;
