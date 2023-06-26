import { MediaRenderer } from '@thirdweb-dev/react'
import { Loading } from '@nextui-org/react'
import QRCode from 'react-qr-code'
import React, { useState } from 'react'
import { type nftData } from '@/models/interfaces/createNFTFormData'

export function NFTCard(props: { nft: nftData; listNFT: Function }) {
	const [displayQrCode, setDisplayQrCode] = useState(false)
	const [isListing, setIsListing] = useState(false)
	return (
		<div
			key={parseInt(props.nft.id.toString())}
			style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
			<MediaRenderer
				src={props.nft.image}
				height={'250rem'}
			/>
			{props.nft.name}

			<button
				onClick={() => {
					setDisplayQrCode(!displayQrCode)
				}}>
				Display QR code
			</button>
			<button
				onClick={async () => {
					await props.listNFT(props.nft)
				}}>
				{!isListing && 'List nft'}
				{isListing && (
					<Loading
						type={'points'}
						size={'sm'}
					/>
				)}
			</button>
			{displayQrCode && (
				<QRCode
					size={200}
					bgColor="white"
					fgColor="black"
					value={props.nft.collectionId}
				/>
			)}
		</div>
	)
}