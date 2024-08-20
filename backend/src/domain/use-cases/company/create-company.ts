import { Company, TCompany } from '@models/company.model'
import { CompanyInputResquestValidator } from '@validation/company-input-request-validator'
import { IValidator } from '@validation/validator'
import { CompanyRepository } from './company-repository'

export class CreateCompanyUseCase {
  constructor(
    private repository: CompanyRepository
  ) { }

  execute(_company: TCompany): Promise<string> {
    const validator: IValidator<TCompany> = new CompanyInputResquestValidator()
    const hasErrors: boolean = !validator.validate(_company)

    return new Promise((resolve, reject) => {
      if (hasErrors) {
        validator.getErrors().map((error) => { reject(new Error(error)) })
      }
      const company = new Company(_company)

      this.repository.create(company).then((response) => { resolve(response) })
    })
  }
}