export class NewUser {
  constructor(
    public firstname?: string,
    public lastname?: string,
    public email?: string,
    public user_type?: number,
    public password?: string,
    public passwordConfirmation?: string
  ) {

  }
}
