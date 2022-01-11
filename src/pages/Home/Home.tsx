import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { Listing } from "../../components";


const Home: FC = () => {
  return (
    <div>
      <Listing/>
    </div>
  )
}

export default observer(Home);
