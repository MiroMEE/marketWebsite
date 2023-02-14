import Navbar from '@/components/navbar';

export default function Home({chleba}) {
  console.log(chleba)
  return (
    <>
        <Navbar/>
    </>
  )
}
export async function getStaticProps(){
  return{
    props:{
      "chleba":"řízek"
    }
  }
}