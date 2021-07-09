import React from "react";
import { connect, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentOrganisationId } from "../../redux/organisation/organisation.selectors";
import { Link } from "react-router-dom";
import {
  SearchDiv,
  NavBar,
  Heading,
  Back,
  Image,
  OneThirdDiv,
} from "./task-nav.styles";
import backArrow from "../../assets/backArrowBlack.png";
import search from "../../assets/navsearch.png";

export const TaskNav = ({title, toggleSearch, orgId}) => {
    const org = useSelector(state => state.organisation)
    console.log(org.organisationId)
    return (
        <NavBar>
            <OneThirdDiv align="flex-start">
            <Back>
                <Link to ={`/all-projects/${org.organisationId}`} style={{textDecoration:'none', color:'black'}}> 
                    <Image src={backArrow}/> Projects
                </Link>
            </Back>

      <OneThirdDiv align="center">
        <Heading> {title} </Heading>
      </OneThirdDiv>

      <OneThirdDiv align="flex-end" onClick={toggleSearch}>
        <SearchDiv src={search} />
      </OneThirdDiv>
      </OneThirdDiv>
    </NavBar>
  );
};

export default TaskNav;
