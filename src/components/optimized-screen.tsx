import { useState, useEffect } from 'react';
import { InteractionManager } from 'react-native';

function OptimizedScreen({
  children,
  placeholder,
}: {
  children: React.ReactElement;
  placeholder?: React.ReactElement;
}) {
  const [isInteracting, setInteracting] = useState(true);
  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setInteracting(false);
    });
  }, []);

  if (isInteracting) {
    return placeholder ?? null;
  }

  return children;
}

export { OptimizedScreen };
