import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movies from './components/Movies/Movies';
import Home from './components/Home/Home';
import TV_SERIES from './components/TV/TVseries';
import Upcoming from './components/Upcoming/Upcoming';
import { QueryClient, QueryClientProvider } from 'react-query';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
  <BrowserRouter>
    <Routes>
      <Route path="/">
      <Route index element={<Home/>}/>  
          <Route path="/Home" element={<Home/>}/>
          <Route path='/Movies' element={<Movies/>}/>
          <Route path='/TV Series' element={<TV_SERIES/>}/>
          <Route path='/Upcoming' element={<Upcoming/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  </QueryClientProvider>
);