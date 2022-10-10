/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useCallback, useEffect, useState} from 'react';
import {View, StyleSheet, Text, PixelRatio, Image} from 'react-native';
import {channeList, programList} from '../Data';

// import {
//     fetchChannelsAction,
//     getProgramsByChannelsAction
// } from '../redux/actions';

import {
  TVGuideMobile,
  MOBILE_GUIDE_CONSTANTS,
  getStartDayTimestamp,
} from 'tvapps-epg-mobile';

// import { useSelector, useDispatch } from 'react-redux';

const NUMBER_CHANNEL_DISPLAY = 10;
const SIZE_PER_PAGE = 2 * NUMBER_CHANNEL_DISPLAY;

var allProgramListSafe = [];
var today = new Date();
var channelExternalIDList = [];
var dateFilter = new Date();
var pageOffset = 1;

function HomeScreen(props) {
  // const dispatch = useDispatch();
  // const state = useSelector(state => state.tvGuideState);
  // const {
  //     channelList,
  //     allProgramList,
  //     isFetchingChannelPrograms
  // } = state || {};

  const [channelListState, setChannelListState] = useState([]);
  const [programListState, setProgramListState] = useState([]);
  const [currentDateDisplay, setCurrentDateDisplay] = useState(new Date());
  const [isLastPageOffset, setIsLastPageOffset] = useState(false);

  useEffect(() => {
    setChannelListState(channeList);
    setProgramListState(programList);
    setIsLastPageOffset(true); // to turn off pagination loader
  }, []);

  // const onDateChange = useCallback(async dateValue => {
  //     await dispatch(getProgramsByChannelsAction([...channelExternalIDList.slice(0, SIZE_PER_PAGE)], dateValue));
  //     dateFilter = dateValue;
  //     setCurrentDateDisplay(dateValue);
  //     setIsLastPageOffset(false);
  // }, []);

  // const onReadEndChannelsPrograms = () => {
  //     const channelListExternalChannelId = [...channelExternalIDList.slice(pageOffset * SIZE_PER_PAGE, (pageOffset + 1) * SIZE_PER_PAGE)];
  //     if (channelListExternalChannelId.length > 0) {
  //         dispatch(getProgramsByChannelsAction(channelListExternalChannelId, currentDateDisplay));
  //         pageOffset++;
  //     }
  // };

  // const onProgramSelectedChange = useCallback(({ program }) => {
  //     console.log('onProgramSelectedChange: ', program)
  // }, []);

  // useEffect(() => {
  //     if (channelList && channelList.length > 0) {
  //         channelExternalIDList = channelList.map(channel => channel.externalChannelId);
  //         dispatch(getProgramsByChannelsAction([...channelExternalIDList.slice(0, SIZE_PER_PAGE)], today));
  //     }
  // }, [channelList]);

  // useEffect(() => {
  //     if (allProgramList && allProgramList.length > 0) {
  //         allProgramListSafe = [...allProgramList];
  //         const programData = allProgramListSafe.find(channelProgramList => getStartDayTimestamp(channelProgramList.date) === getStartDayTimestamp(dateFilter));
  //         if (programData && programData.data) {
  //             setProgramListState(programData.data);
  //             const listChannelComponent = [...channelList.slice(0, programData.data.length)];
  //             setChannelListState(listChannelComponent);
  //             if (listChannelComponent.length === channelList.length) {
  //                 setIsLastPageOffset(true);
  //             }
  //         }
  //     }
  // }, [allProgramList]);

  // useEffect(() => { ̰
  //     dispatch(fetchChannelsAction());
  // }, []);

  return (
    <View style={styles.container}>
      <TVGuideMobile
        tvGuideWidth={MOBILE_GUIDE_CONSTANTS.DEVICE_WIDTH}
        tvGuideHeight={MOBILE_GUIDE_CONSTANTS.DEVICE_HEIGHT}
        timeLineHeaderHeight={30}
        numberOfChannelsDisplayed={NUMBER_CHANNEL_DISPLAY}
        numberOfTimelineCellDisplayed={2}
        channeList={channelListState}
        programList={programListState}
        numberOfFutureDays={3}
        numberOfPastDays={2}
        currentDate={currentDateDisplay}
        // onReachingEndChannel={onReadEndChannelsPrograms}
        onReachingEndChannel={() => {}}
        programStylesColors={{
          activeProgramBackgroundColor: '#463cb4',
          currentProgramBacgroundColor: '#FFFFFF',
          pastProgramBackgroundColor: '#463db4',
          futureProgramBackgroundColor: '#463cb4',
          activeProgramTextColor: '#FFFFFF',
          currrentProgramTextColor: '#000000',
          pastProgramTextColor: '#ffffff',
          futureProgramTextColor: '#FFFFFF',
          startDateProgramBackgroundColor: '#c34164',
          startDateProgramTextColor: '#FFFFFF',
          startDateProgramTextFontSize: 15,
          programNameFontSize: 16,
        }}
        timeLineHeaderTextFontSize={18}
        timeIndicatorStyles={{
          backgroundColor:
            MOBILE_GUIDE_CONSTANTS.THEME_STYLES.LOADING_INDICATOR_COLOR,
          width: 6,
          borderRadius: 3,
        }}
        containerBackroundColor={'#0b004c'}
        programLineHeight={60}
        channelListWidth={70}
        // onDateChange={onDateChange}
        // onProgramSelectedChange={onProgramSelectedChange}
        sizePerPage={SIZE_PER_PAGE}
        isLastPageOffset={isLastPageOffset}
      />
    </View>
  );
}

export default React.memo(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
