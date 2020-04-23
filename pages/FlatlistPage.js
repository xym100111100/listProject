import React, { Component } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    RefreshControl,
    ActivityIndicator,
    refreshControl
} from 'react-native';
import Constants from 'expo-constants';
type Props = {};
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-14529d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-14e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-14559d',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-14',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bde29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f6-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3d96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3471f6-145571e29d72',
        title: 'Third Item',
    }

    ,
    {
        id: '582f-3471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '8694a0f-3471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '694a0f-3471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '586f-3471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-34-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694af-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f3471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a3471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58693471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3471fd96-141e29d72',
        title: 'Third Item',
    }
];
export default class FlatlistPage extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            DATA: [...DATA],
            isLoading: false,

        }
    }

    Item({ title }) {
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{title}</Text>
            </View>
        );
    }

    loadData() {
        let tempData = DATA.splice(1, 5)
        this.setState({
            DATA: tempData
        })
    }
    
    genIndicator() {
        return <View style={styles.indicatorContainer}>
            <ActivityIndicator
                style={styles.indicator}
                size='large'
                animating={true}
            />
            <Text>正在加载更多</Text>
        </View>
    }

    onEnd() {
        setTimeout(() => {
            let time = new Date().getTime()
            let dataArray = []
            for (let i = 0; i < 20; i++) {
                dataArray.push({
                    title: time + "a" + i,
                    id: time + i + ""
                })
            }
            dataArray = this.state.DATA.concat(dataArray)
            this.setState({
                DATA: dataArray
            })
        }, 2000);
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.DATA}
                    renderItem={({ item }) => this.Item({ title: item.title })}
                    keyExtractor={item => item.id}
                    refreshControl={
                        <RefreshControl
                            colors={['red']}
                            refreshing={this.state.isLoading}
                            onRefresh={() => this.loadData(true)}
                            tintColor={'orange'}
                        />
                    }
                    ListFooterComponent={() => this.genIndicator()}
                    onEndReached={() => {
                        this.onEnd()
                    }}
                />
            </View>
        )
    }



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        height: 200
    },
    indicatorContainer: {
        alignItems: "center"
    },
    title: {
        fontSize: 32,
    },
});