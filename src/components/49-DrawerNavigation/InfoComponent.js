import React, {Component} from 'react'
import {Alert, FlatList, StyleSheet, Text, View, Image, Platform, TouchableHighlight} from 'react-native'
import flatListData from '../../data/flatListData';
import Swipeout from 'react-native-swipeout';
import AddModal from './AddModal';
import EditModal from './EditModal';

import HeaderComponent from './HeaderComponent';

const backgroundColor = '#007256';
const styles = StyleSheet.create({
    flatListItem: {
        color: "yellow",
        padding: 10,
        fontSize: 16
    }
});
class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null,
            numberOfRefresh: 0,
        };
    }
    refreshFlatListItem = () => {
        this.setState((prevState) => {
            return {
                numberOfRefresh: prevState.numberOfRefresh + 1
            }
        })
    }
    render() {
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if (this.state.activeRowKey != null) {
                    this.setState({activeRowKey: null});
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({activeRowKey: this.props.item.key});
            },
            right: [
                {
                    onPress: () => {
                        this.props.parentFlatList.refs.editModal.showEditModal(flatListData[this.props.index], this);
                    },
                    text: 'Edit', type: 'primary'
                },
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete ?',
                            [
                                {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                {
                                    text: 'Yes', onPress: () => {
                                        flatListData.splice(this.props.index, 1);
                                        //Refresh FlatList ! 
                                        this.props.parentFlatList.refreshFlatList(deletingRow);
                                    }
                                },
                            ],
                            {cancelable: true}
                        );
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        };
        return (
            <Swipeout {...swipeSettings}>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen' : 'tomato',
                    }}>
                        <Image
                            source={{uri: this.props.item.imageUrl}}
                            style={{width: 100, height: 100, margin: 5}}
                        >
                        </Image>
                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            height: 100
                        }}>
                            <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                            <Text style={styles.flatListItem}>{this.props.item.foodDescription}</Text>
                        </View>
                    </View>

                    <View style={{
                        height: 1,
                        backgroundColor: 'white'
                    }}>
                    </View>

                </View>
            </Swipeout>
        );
    }
}

export default class InfoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deletedRowKey: null,
        }
        this._onPressAdd = this._onPressAdd.bind(this);
    }
    static navigationOptions = ({navigation}) => {
        let drawerLabel = 'Info';
        let drawerIcon = () => (
            <Image
                source={require('../../icons/info-icon.png')}
                style={{width: 26, height: 26, tintColor: backgroundColor}}
            />
        );
        return {drawerLabel, drawerIcon};
    }
    refreshFlatList = (activeKey) => {
        this.setState(() => {
            return {
                deletedRowKey: activeKey
            }
        });
        this.refs.flatList.scrollToEnd();
    }
    _onPressAdd() {
        this.refs.addModal.showAddModal();
    }
    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
        }}>
            <HeaderComponent {...this.props} />
            <View style={{flex: 1, marginTop: 0}}>
                <View style={{
                    backgroundColor: 'lightblue',
                    height: 64,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }}>
                    <TouchableHighlight
                        style={{marginRight: 10}}
                        underlayColor='lightgreen'
                        onPress={this._onPressAdd}
                    >
                        <Image
                            style={{width: 35, height: 35}}
                            source={require('../../icons/icons-add.png')}
                        >

                        </Image>
                    </TouchableHighlight>
                </View>
                <FlatList
                    ref={"flatList"}
                    data={flatListData}
                    renderItem={({item, index}) => {
                        console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                        return <FlatListItem item={item} index={index} parentFlatList={this} />;
                    }}
                >
                </FlatList>
                <AddModal ref={'addModal'} parentFlatList={this} >

                </AddModal>
                <EditModal ref={'editModal'} parentFlatList={this} >

                </EditModal>
            </View>

        </View>);
    }
}