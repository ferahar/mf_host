export interface UserModel {
  personName?: string | undefined;
  personInfo?: string | undefined;
  personStatus?: 'available' | 'remote' | 'out' | undefined;
  personAvatarUrl?: string | undefined;
}
