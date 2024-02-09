"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";
import { ReactNode, memo } from "react";

export default memo(function Nav() {
  const pathname = usePathname();

  interface LinkProps {
    children?: ReactNode;
    href: string;
  }

  const ListItem: React.FC<LinkProps> = function ListItem(prop) {
    return (
      <MDBListGroupItem
        active={prop.href === pathname}
        action
        noBorders
        aria-current={prop.href === pathname}
        className="px-3"
        href={prop.href}
        tag={Link}
        style={{
          backgroundColor:
            prop.href === pathname ? "rgba(18,102,241,.05)" : undefined,
        }}
      >
        {prop.children}
      </MDBListGroupItem>
    );
  };

  return (
    <MDBListGroup light>
      <ListItem href="/">root</ListItem>
      <ListItem href="/test">test</ListItem>
    </MDBListGroup>
  );
});
