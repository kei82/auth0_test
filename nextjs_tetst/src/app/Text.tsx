import { ReactNode } from "react";
const PrivatePost = ({
  title,
  author,
  children,
  titleRender,
}: {
  title: ReactNode;
  author: ReactNode;
  children: ReactNode;
  titleRender: Function;
}) => {
  return (
    <div>
      <div>{titleRender({ title, author })}</div>
      <div>{children}</div>
    </div>
  );
};
// 加工済みコンポーネントをexportとする

// 何らかの加工パターン
const FooTitle = ({
  title,
  author,
}: {
  title: ReactNode;
  author: ReactNode;
}) => (
  <div>
    Title: {title} Author: {author}
  </div>
);

const BazTitle = ({
  title,
  author,
}: {
  title: ReactNode;
  author: ReactNode;
}) => (
  <div>
    {" "}
    {title} ( {author} )
  </div>
);

export const FooPost = (props: any) => {
  return <PrivatePost {...props} titleRender={FooTitle} />;
};

export const BazPost = (props: any) => {
  return <PrivatePost {...props} titleRender={BazTitle} />;
};
