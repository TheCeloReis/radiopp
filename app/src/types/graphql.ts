export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: "Query";
  radios: Array<Radio>;
};

export type QueryRadiosArgs = {
  city?: Maybe<Scalars["String"]>;
  region?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  uri?: Maybe<Scalars["String"]>;
};

export type Radio = {
  __typename?: "Radio";
  id: Scalars["Int"];
  name: Scalars["String"];
  uri: Scalars["String"];
  originalURL: Scalars["String"];
  thumb: Scalars["String"];
  website: Scalars["String"];
  streamURL?: Maybe<Scalars["String"]>;
  location: Location;
  schedule: RadioSchedule;
};

export type Location = {
  __typename?: "Location";
  city: Scalars["String"];
  region: Scalars["String"];
  state: Scalars["String"];
  country: Scalars["String"];
};

export type RadioSchedule = {
  __typename?: "RadioSchedule";
  sun?: Maybe<Array<RadioDailySchedule>>;
  mon?: Maybe<Array<RadioDailySchedule>>;
  tue?: Maybe<Array<RadioDailySchedule>>;
  wed?: Maybe<Array<RadioDailySchedule>>;
  thu?: Maybe<Array<RadioDailySchedule>>;
  fri?: Maybe<Array<RadioDailySchedule>>;
  sat?: Maybe<Array<RadioDailySchedule>>;
};

export type RadioDailySchedule = {
  __typename?: "RadioDailySchedule";
  time: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
  presenter?: Maybe<Scalars["String"]>;
};
