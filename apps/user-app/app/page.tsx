import {PrismaClient} from '@repo/db/client';
const client = new PrismaClient();
export default function Home() {
  return (
   <div>
     <h1 className={"text-2xl"}>hello world </h1>
   </div>
  );
}
