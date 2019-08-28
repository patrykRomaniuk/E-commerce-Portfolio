import React, { useEffect } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './index.css'
import MainPage from './pages/MainPage';
import Woman from './pages/Woman';
import Man from './pages/Man';
import ErrorPage from './pages/ErrorPage';
import Items from './components/Items';
import { ItemData } from './data/ItemData.js';
import Item from './components/Item';
import HeartPage from './pages/HeartPage';
import ShopPage from './pages/ShopPage';
import SignInPage from './pages/SignInPage';
import AccountPage from './pages/AccountPage';
import LoginPage from './pages/LoginPage';
import store from './store';
import { Provider } from 'react-redux';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  },[])
    const loopingThroughItemManToItem = ItemData.map(item => {
      const manToItem = item.manePageItems.map(manItem => {
        const manItemVar = manItem.items.map(item => {
          return (
              <Route exact path={`/man/${manItem.url}/${item.itemUrl}`} render={()=><Item 
                name={item.name}
                img={item.img}
                price={item.price}
                priceNum={item.priceNum}
                quantity={item.quantity}
                isDropdown={item.isDropdown}
                genderName="man"
                url={manItem.url}
                itemUrl={item.itemUrl}/>}/>
          )
        })
        return manItemVar;
      })
      return manToItem;
  })


  const loopingThroughItemDataMan = ItemData.map(item => {
    const man = item.manePageItems.map(manItem => {
      return (
        <Route exact path={`/man/${manItem.url}`} render={() => <Items 
          genderName="man"
          minPrice={manItem.minPrice}
          maxPrice={manItem.maxPrice}
          url={manItem.url}  
          items={manItem.items} 
          priceNum={manItem.priceNum}
          quantity={manItem.quantity}
          isDropdown={manItem.isDropdown}/> } />
      )
    })
    return man;
    })

    const loopingThroughItemWomanToItem = ItemData.map(item => {
      const womanToItem = item.womanPageItems.map(womanItem => {
        const womanItemVar = womanItem.items.map(item => {
          return (
              <Route exact path={`/woman/${womanItem.url}/${item.itemUrl}`} render={()=><Item 
                name={item.name}
                img={item.img}
                price={item.price}
                priceNum={item.priceNum}
                quantity={item.quantity}
                isDropdown={item.isDropdown}
                genderName="woman"
                url={womanItem.url}
                itemUrl={item.itemUrl}/>}/>
          )
        })
        return womanItemVar;
      })
      return womanToItem;
  })

  const loopingThroughItemDataWoman = ItemData.map(item => {
    const woman = item.womanPageItems.map(womanItem => {
      return (
        <Route exact path={`/woman/${womanItem.url}`} render={() => <Items 
          genderName="woman"
          minPrice={womanItem.minPrice}
          maxPrice={womanItem.maxPrice}
          url={womanItem.url}  
          items={womanItem.items} 
          priceNum={womanItem.priceNum}
          quantity={womanItem.quantity}
          isDropdown={womanItem.isDropdown}/> } />
      )
    })
    return woman;
    })
    return (
      <BrowserRouter>
          <div>
          <Provider store={store}>
            <Switch>
              <Route exact path="/" component={MainPage}/>
              <Route exact path="/heart-page" component={HeartPage}/>
              <Route exact path="/woman" component={Woman}/>
              <Route exact path="/man" component={Man}/>
              <Route exact path="/shop-page" component={ShopPage}/>
              <Route exact path="/sign-in" component={SignInPage}/>
              <Route exact path="/account" component={AccountPage}/>
              <Route exact path="/login" component={LoginPage}/>
              {loopingThroughItemWomanToItem}
              {loopingThroughItemManToItem}
              {loopingThroughItemDataMan}
              {loopingThroughItemDataWoman}
              <Route exact component={ErrorPage}/>
            </Switch>
          </Provider>
          </div>
      </BrowserRouter>
    );
}

export default App;
