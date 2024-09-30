import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default async function Products() {
  const data = await axios.get("https://fakestoreapi.com/products");
  const router = useRouter();
  return (
    <div>
      {data.data.map((data, index) => (
        <div key={index} className="cursor-pointer" onClick={()=>{router.push()}}>
          <div className="flex flex-col ">
            <Image
              width={300}
              height={300}
              className=""
              src={data.image}
              alt=""
            />
            <h4>Title:{data.title}</h4>
            <h4>Price:{data.price}</h4>
            <h4>ID:{data.id}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
