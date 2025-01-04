export interface GetDatabaseProps {
  name: string;
  $id: string;
}
export interface GetCollectionProps {
  name: string;
  $id: string;
  databaseId?: string;
}
