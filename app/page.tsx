import { Button } from "@/components/ui/button";



const HomePage = () => {
  return <div>
    <h1 className="text-6xl md:text-8xl">homepage</h1>
    <Button variant={'outline'}
      size={'lg'} className="capitalize ">click me</Button>
  </div>;
};
export default HomePage;
