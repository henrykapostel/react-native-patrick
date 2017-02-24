import React, { PropTypes, Component } from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import { default as styles} from './styles';
import { AppointmentsView, FavoritesView, HomeView, ProfileView, SearchView } from 'AppScenes';
import { MainTabBar } from 'AppComponents';

class MainScene extends Component {
    constructor(props, context) {
        super(props, context);

        StatusBar.setHidden(false);
        this.children = [];
    }
    renderTabBar = () => {

    };

    render() {
      return (
        <ScrollableTabView
          style={{marginBottom: 0}}
          initialPage={0}
          tabBarPosition="overlayBottom"
          renderTabBar={() => <MainTabBar />}>
          <HomeView />
          <SearchView />
          <AppointmentsView />
          <FavoritesView />
          <ProfileView />
        </ScrollableTabView>
      );
    }
}

export default MainScene;
