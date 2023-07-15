import { action, AnnotationsMap } from 'mobx';
import { useLocalObservable as useLocalObservableOriginal } from 'mobx-react-lite';

const useLocalObservable = <TStore extends Record<string, any>>(
  initializer: () => TStore,
  annotations?: AnnotationsMap<TStore, never>,
) => {
  const store = useLocalObservableOriginal(initializer, annotations);

  const updateStore = action((state: Partial<typeof store>) => {
    Object.assign(store, state);
  });

  const resetStore = () => updateStore(initializer());

  return {
    store,
    updateStore,
    resetStore,
  };
};

export default useLocalObservable;
