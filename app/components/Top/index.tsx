import Button from "./Button";
import { pp } from "./constants";

const Navigation = () => {
  return (
    <div className='flex row-auto'>
      <Button href={`/`} label='Home' />
      <Button href={`${pp}/user`} label='User' />
      <Button href={`${pp}/about`} label='About' />
      <Button href={`${pp}/donut`} label='Donut' />
      <Button href={`${pp}/dominos`} label='Dominos' />
    </div>
  );
};

export default Navigation;
