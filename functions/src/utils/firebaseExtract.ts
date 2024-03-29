export function extractRadio(data: any, __typename?: string) {
  return {
    __typename,
    id: data.id as number,
    name: data.name as string,
    uri: data.uri as string,
    originalURL: data.originalURL as string,
    thumb: data.thumb as string,
    website: data.website as string,
    streamURL: data.streamURL as string,
    location: extractLocation(data, "Location"),
    schedule: data.schedule as any,
  };
}

export function extractLocation(data: any, __typename?: string) {
  return {
    __typename,
    city: data.city as string,
    region: data.region as string,
    state: data.state as string,
    country: data.country as string,
  };
}
