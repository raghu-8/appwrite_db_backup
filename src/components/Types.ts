export interface GetDatabaseProps {
  name: string;
  $id: string;
}
export interface GetCollectionProps {
  name: string;
  $id: string;
  databaseId?: string;
}

export interface GetAuthType {
  key: string;
  projectId: string;
  endpoint: string;
}
