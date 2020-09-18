export class CreditCard {
  private id: number;
  private cardNumber: string;
  private expireAt: string;
  private webPwd: string;
  private isActive: boolean;
  private createdAt: string;
  private updatedAt: string;

  public constructor(
    id: number,
    cardNumber: string,
    expireAt: string,
    webPwd: string,
    isActive: boolean,
    createdAt: string,
    updatedAt: string,
  ) {
    this.id = Number(id);
    this.cardNumber = cardNumber;
    this.expireAt = expireAt;
    this.webPwd = webPwd;
    this.isActive = isActive;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public static withId(id: number): CreditCard {
    return new CreditCard(id, '', '', '',true, '', '');
  }

  public getId(): number {
    return this.id;
  }

  public getCardNumber(): string {
    return this.cardNumber;
  }

  public getExpiredAt(): string {
    return this.expireAt;
  }

  public isIsActive(): boolean {
    return this.isActive;
  }

  public getCreatedAt(): string {
    return this.createdAt;
  }

  public getUpdatedAt(): string {
    return this.updatedAt;
  }
}
