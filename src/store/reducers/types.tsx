export type LoadingStateError = {
  message: string
}

export interface LoadingState<E = LoadingStateError> {
  loading: boolean;
  error: E | null,
}
