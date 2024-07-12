type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <div className="max-w-[1000px] w-full mx-auto ">{children}</div>;
};

export default Layout;
