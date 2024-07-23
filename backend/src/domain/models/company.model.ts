import { Cnpj } from './cnpj.model'

export type TCompany = {
  uuid?: string
  name: string
  email: string
  cnpj: string
  phone: string
  address: string
  number?: string
  city: string
  uf: string
  complement: string
  secret: string
}

interface ICompany {
  uuid?: string
  name?: string
  email?: string
  cnpj?: string
  phone?: string
  address?: string
  number?: string
  city?: string
  uf?: string
  complement?: string
  secret?: string
}

export class Company {
  #uuid?: string
  #name: string
  #email: string
  #cnpj: Cnpj
  #phone: string
  #address: string
  #number?: string
  #city: string
  #uf: string
  #complement?: string
  #secret: string

  constructor(data: TCompany) {
    this.#uuid = data.uuid
    this.#name = data.name
    this.#email = data.email
    this.#cnpj = new Cnpj(data.cnpj)
    this.#phone = data.phone
    this.#address = data.address
    this.#number = data.number || ''
    this.#city = data.city
    this.#uf = data.uf
    this.#complement = data.complement
    this.#secret = data.secret
  }

  public get uuid(): string | undefined {
    return this.#uuid
  }

  public set uuid(_uuid: string) {
    this.#uuid = _uuid
  }

  public get name(): string {
    return this.#name
  }

  public get email(): string {
    return this.#email
  }

  public get cnpj(): Cnpj {
    return this.#cnpj
  }

  public get phone(): string {
    return this.#phone
  }

  public get address(): string {
    return this.#address
  }

  public get _number(): string | undefined {
    return this.#number
  }

  public get city(): string {
    return this.#city
  }

  public get uf(): string {
    return this.#uf
  }

  public get complement(): string | undefined {
    return this.#complement
  }

  public get secret(): string {
    return this.#secret
  }
}