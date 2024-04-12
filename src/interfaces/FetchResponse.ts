interface FetchResponse<T> {
  code: string;
  data: T;
  status: string;
}

export default FetchResponse;
