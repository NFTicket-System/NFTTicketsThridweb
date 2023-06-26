import { type NFTCollection } from '@thirdweb-dev/sdk'
import { type BigNumber } from 'ethers'

export interface formDataType {
	count: number
	name: string
	description: string
	date: string
	price: string
	hourStart: string
	hourEnd: string
	location: string
	image: string
}

export interface creditCard {
	number: string
	expMonth: string
	expYear: string
	cvc: string
}

export interface maticData {
	market_data: {
		current_price: {
			eur: number
		}
	}
}

export interface nftInfo {
	numberOwned: number
	collection: NFTCollection
}


export interface nftData {
	collectionId: string
	image: string
	id: BigNumber
	name: string
}

export interface CreateEventResponse {
	fieldCount: number
	affectedRows: number
	insertId: number
	serverStatus: number
	warningCount: number
	message: string
	protocol41: boolean
	changedRows: number
}
