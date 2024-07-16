import { Button } from "@/components/ui/button"

interface img {
    urlImg : string,
    size : number
}

function Img  ({urlImg, size, is_packet}) {
    if(is_packet){
    return <img src={urlImg} alt="" width={size}/>
    } else {
        return "not faoud"
    }
}



export default function index() {
  return (
    <>
      <Img 
      urlImg={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjPy4QWtfglbm7rI4dSi6dvh4n8ZExI828MA&s"}
      size={1000}
      is_packet = {false}
      />
      <Button>isi</Button>

    </>
  );
}
