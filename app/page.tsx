import { Button } from "@/components/ui/button";



const HomePage = () => {
  return <div>
    <h1 className="text-3xl text-muted-foreground">homepage</h1>
    <Button variant={'outline'}
      size={'lg'} className="capitalize ">click me</Button>
  </div>;
};
export default HomePage;
