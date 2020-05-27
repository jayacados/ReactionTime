import React from 'react';
import { render } from 'react-dom';
import Beaker from './components/Beaker';
import { CreateRootTest } from './components/CreateRootTest';
import { PackageTest } from './components/PackageTest';
import { FallbackTest } from './components/FallbackTest';
import { SuspenseTest } from './components/SuspenseTest';
import { Drawer, List, ListItem } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import Timer from '@material-ui/icons/Timer';
import SearchIcon from '@material-ui/icons/Search';
import { MemoryRouter as Router, Switch } from 'react-router-dom';
import { Link, Route } from 'react-router-dom';
import Home from './components/HomePage/homePage';
import {SearchGlass} from './components/SearchGlass';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import {SetUp} from './components/SetUp';
import { withStyles } from '@material-ui/core/styles';

const StyledDrawer = withStyles({
  paper: {
    background: '#222831'
  }
})(Drawer);

document.addEventListener('DOMContentLoaded', () => 
  render(
    <div>
      <Router>
        <StyledDrawer variant="permanent">
          <List >
            <ListItem>
              <Link to="/">
                <HomeIcon fontSize="large" />
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/tests">
                <Timer fontSize="large" />
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/search">
                <SearchIcon fontSize="large" />
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/build">
                <BuildOutlinedIcon fontSize="large" />
              </Link>
            </ListItem>
          </List>
        </StyledDrawer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tests" component={Beaker} />
          <Route exact path="/search" component={SearchGlass}/>
          <Route exact path="/build" component={SetUp}/>
          <Route exact path="/CreateRootTest" component={CreateRootTest} />
          <Route exact path="/PackageTest" component={PackageTest} />
          <Route exact path="/FallbackTest" component={FallbackTest} />
          <Route exact path="/SuspenseTest" component={SuspenseTest} />
        </Switch>
      </Router>
    </div>,
    document.getElementById('root')
  
  )
);
