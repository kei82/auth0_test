"use client";

import { user } from "@/app/actions";
import { memo, useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import { Claims } from "@auth0/nextjs-auth0";

const ELEM1 = memo(function ELEM1({ s }: { s: boolean }) {
  console.log(5);
  return <p>{String(s)}</p>;
});
const ELEM2 = memo(function ELEM2({ s }: { s: Claims | undefined }) {
  console.log(4);
  return <pre>{JSON.stringify(s, null, 2)}</pre>;
});

const ELEM3 = memo(function ELEM3() {
  console.log(1);
  return (
    <MDBAccordion initialActive={1}>
      <MDBAccordionItem collapseId={1} headerTitle="Accordion Item">
        <strong>This is the first accordion body.</strong> It is shown by
        default, until the collapse plugin adds the appropriate classes that we
        use to style each element. These classes control the overall appearance,
        as well as the showing and hiding via CSS transitions. You can modify
        any of this with custom CSS or overriding our default variable also
        worth noting that just about any HTML can go within the{" "}
        <code>.accordion-body</code>, though the transition does limit overflow.
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={2} headerTitle="Accordion Item #2">
        <strong>This is the second accordion body.</strong> It is hidden by
        default, until the collapse plugin adds the appropriate classes that we
        use to style each element. These classes control the overall appearance,
        as well as the showing and hiding via CSS transitions. You can modify
        any of this with custom CSS or overriding our default variables.worth
        noting that just about any HTML can go within the{" "}
        <code>.accordion-body</code>, though the transition does limit overflow.
      </MDBAccordionItem>
    </MDBAccordion>
  );
});

export default function Home() {
  const [userInfo, setUserInfo] = useState<Claims | undefined>();
  const [boolean, setBoolean] = useState<boolean>(true);

  async function setUser() {
    const res = await user();
    setUserInfo(res);
  }

  async function setBool() {
    setBoolean((boolean) => !boolean);
  }

  return (
    <main>
      <div>
        <div className="m-3">
          <MDBBtn onClick={setUser}>set-user</MDBBtn>
          <MDBBtn onClick={setBool}>set-bool</MDBBtn>
        </div>

        <div className="m-3">
          <ELEM2 s={userInfo} />
          <ELEM1 s={boolean} />
        </div>

        <ELEM3 />
      </div>
    </main>
  );
}
