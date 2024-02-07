import HomeButton from "../../compoents/Homebutton"

type Props = {
    params: {
    location: string
    }
}

export default function Detail({ params }: Props) {
    const name = params.location === 'seoul' ? '서울' : ''

   

    return(
        <>
            <h1> {name}의 3일의 예보</h1>
            <HomeButton />
        </>
    )
}