import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from "../actionType"

import request from '../../api'

export const getPopularVideos = () => async (dispatch, getState) => {
    try {

        dispatch({
            type: HOME_VIDEOS_REQUEST
        })
        // const { data } = await request('/videoCategories', {
        //     params: {
        //        part: 'snippet',
        //     //    chart: 'mostPopular',
        //        regionCode: 'IN',
        //     //    maxResults: 20,
        //     //    pageToken: getState().homeVideos.nextPageToken,
        //     //    videoCategoryId: '4',
        //     },
        // })

        // const { data } = await request('/videos', {
        //     params: {
        //         part: "snippet,contentDetails,statistics",
        //         chart: "mostPopular",
        //         regionCode: 'IN', // Keep this if you want to limit to a region
        //         maxResults: 20,
        //         categoryId: '27', // Filter for the Education category
        //         pageToken: '',
        //     },
        // })

        // console.log(data);


        const { data } = await request("/search", {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                // regionCode: 'IN',
                maxResults: 20,
                pageToken: getState().homeVideos.nextPageToken,
                q: '',
                type: 'video',
                videoCategoryId: 27,
            },
        })


        dispatch({
            type: HOME_VIDEOS_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken,
                category: 'All',
            },
        })


    } catch (error) {

        console.log(error.message)
        dispatch({
            type: HOME_VIDEOS_FAIL,
            payload: error.message,
        })


    }
}




export const getVideosByCategory = keyword => async (dispatch, getState) => {
    try {
        dispatch({
            type: HOME_VIDEOS_REQUEST,
        })
        const { data } = await request('/search', {
            params: {
                part: 'snippet',
                // regionCode: 'IN',
                maxResults: 20,
                pageToken: getState().homeVideos.nextPageToken,
                q: keyword,
                type: 'video',
                videoCategoryId: 27,
            },
        })

        dispatch({
            type: HOME_VIDEOS_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken,
                category: keyword,
            },
        })
    } catch (error) {
        console.log(error.message)
        dispatch({
            type: HOME_VIDEOS_FAIL,
            payload: error.message,
        })
    }
}