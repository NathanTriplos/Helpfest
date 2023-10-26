import { Party } from '../../entities/Party/party'
import { PartyRepository } from './party-repository'

export class FindPartyUseCase {
  constructor (private repository: PartyRepository) { }

  findAll (): Array<Party> {
    return this.repository.findAll()
  }

  async findOne (uuid: string): Promise<Party | undefined> {
    const party = await this.repository.findOne(uuid)

    return party
  }
}