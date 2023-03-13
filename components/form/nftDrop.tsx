import React, { useState } from 'react';
import { Button, Grid, Input, Spacer, Text } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { useAddress, useCompilerMetadata, useConnect, useSDK, useUser } from '@thirdweb-dev/react';


const NftDrop = () => {
    const { register, handleSubmit, setError, formState: { isSubmitting, errors } } = useForm();
    const sdk = useSDK();
    const [ { data }, connect ] = useConnect();
    //const { data: compilerData, isLoading, error } = useCompilerMetadata( contractAddress );
    const address = useAddress();

    const contractAddress = "{{contract_address}}";

    async function saveFormData( data: object ) {
        return await fetch( "http://localhost:5000/create-drop", {
            body: JSON.stringify( data ),
            headers: { "Content-Type": "application/json" },
            method: "POST"
        } )
    }


    const onSubmit = async ( formData: any ) => {
        /*const response = await saveFormData( data )

        if ( response.status === 400 ) {
            // Validation error
        } else if ( response.ok ) {
            // successful
        } else {
            // unknown error
        }*/
        if ( data.connected ) {
            sdk?.deployer.deployNFTDrop( {
                name: 'my title',
                description: "my best description",
                image: '',
                primary_sale_recipient: address!,
                fee_recipient: process.env.NEXT_PUBLIC_MADD,
                seller_fee_basis_points: 1
            } );
        } else {
            console.log( 'no' )
        }
    }

    return (
            <>
                <form onSubmit={ handleSubmit( onSubmit ) }>
                    <Grid.Container justify={ "center" } direction={ "column" }>
                        <Input size={ "lg" }
                               clearable bordered labelPlaceholder="Name"
                               { ...register( "name", { required: true } ) }
                        />
                        <Spacer y={ 2 }/>
                        {/*<Input
                                size={ "lg" } clearable bordered labelPlaceholder="Name" name="name" value={ name }
                                onChange={ ( e ) => setName( DOMPurify.sanitize( e.target.value ) ) }/>
                        <Spacer y={ 2 }/>
                        <Input
                                size={ "lg" }
                                clearable
                                bordered
                                labelPlaceholder="Name"
                                name="name"
                                value={ name }
                                onChange={ ( e ) => setName( DOMPurify.sanitize( e.target.value ) ) }/>
                        <Spacer y={ 2 }/>
                        <Input
                                size={ "lg" } clearable bordered labelPlaceholder="Name" name="name" value={ name }
                                onChange={ ( e ) => setName( DOMPurify.sanitize( e.target.value ) ) }/>
                        <Spacer y={ 1 }/>*/ }
                        <Button type="submit">{ isSubmitting ? 'Loading' : "Submit" }</Button>
                    </Grid.Container>
                </form>

            </>
    );
}

export default NftDrop;