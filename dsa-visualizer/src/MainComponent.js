// MainComponent.js
import React from 'react';
import Canvas from './components/canvas';
import ShortestPath from './components/ShortestPath';
import MST from './components/MST';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Sorting from './components/Sorting/Sorting';
import DataStructures from './components/DataStructures';
import Searching from './components/Searching';
import GraphAlgorithm from './components/GraphAlgorithm';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import Stack from './components/Data-Structures/Stack'
import Queue from './components/Data-Structures/Queue'
import LinkedList from './components/Data-Structures/LinkedList';
import Tree from './components/Tree/Tree';


function MainComponent() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/home' element={<Home />} />
      <Route path='/bfsdfs' element={<Canvas />} />
      <Route path='/dijkstra' element={<ShortestPath />} />
      <Route path='/PrimMST' element={<ShortestPath />} />
      <Route path='/KruskalMST' element={<MST />} />
      <Route path='/Sorting' element={<Sorting />} />
      <Route path='/Searching' element={<Searching />} />
      <Route path='/Tree' element={<Tree />} />
      <Route path='/GraphAlgorithm' element={<GraphAlgorithm />} />
      <Route path='/DataStructures' element={<DataStructures />} />
      <Route path='/Stack' element={<Stack />} />
      <Route path='/Queue' element={<Queue />} />
      <Route path='/LinkedList' element={<LinkedList />} />
    </Routes>
  );
}

export default MainComponent;
