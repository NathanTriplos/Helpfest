import { Router } from 'express'
import { PartyController } from '../controllers/party.controller'
import { VerifyToken } from '../middlewares/verify-token'
import { InMemoryPartyRepository } from '../repositories/in-memory-party-repository'
import { resolver } from './resolver'

const verifyToken = new VerifyToken()
const repository = new InMemoryPartyRepository()
const controller = new PartyController(repository)

export const PartyRoutes = Router()

PartyRoutes.get('/party/all', resolver(verifyToken.execute), resolver(controller.findAllParties))
PartyRoutes.get('/party/by', resolver(verifyToken.execute), resolver(controller.findPartyById))
PartyRoutes.post('/party/create', resolver(verifyToken.execute), resolver(controller.createParty))
PartyRoutes.put('/party/update', resolver(verifyToken.execute), resolver(controller.updateParty))
PartyRoutes.delete('/party/delete', resolver(verifyToken.execute), resolver(controller.deleteParty))