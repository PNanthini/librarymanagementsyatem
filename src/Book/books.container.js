import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'antd/dist/antd.css';
// import './index.css';
 import {Button,notification } from "antd"
import BookComponent from "./books.component";


const defaultDataSource=[{
  key: '1',
  bookName: "Man's search for meaning",
  bookid: 101,
  author:"Viktor Frankl",
  price: 5,
  availableItems: 7,
  category: "Philosophy"
}, {
  key: '2',
  bookName: 'Wings of Fire: An Autobiography 1st Edition',
  author:"Dr.A. P. J. Abdul Kalam",
  bookid: 102,
  price: 4,
  availableItems: 8,
  category: "Autobiography"
}, {
  key: '3',
  bookName: 'A Century is not Enough: My Roller-coaster Ride to Success',
  author:"Sourav Ganguly",
  bookid: 103,
  price: 4,
  availableItems: 6,
  category: "Autobiography"
}, {
  key: '4',
  bookName: 'The Another World',
  author:"JAMES JONES",
  bookid: 104,
  price: 4,
  availableItems: 2,
  category: "Historical Fiction"
}, {
  key: '5',
  bookName: 'React Design Patterns and Best Practices',
  author:"Richard Dawkins",
  bookid:105,
  price: 2,
  availableItems: 1,
  category: "Programming"
},{
  key: '6',
  bookName: "The Seven Wonders",
  bookid: 106,
  author:"Viktor Frankl",
  price: 5,
  availableItems: 7,
  category: "Philosophy"
}, {
  key: '7',
  bookName: 'Ignited Minds',
  author:"Dr.A. P. J. Abdul Kalam",
  bookid: 107,
  price: 4,
  availableItems: 8,
  category: "Philosophy"
}, {
  key: '8',
  bookName: 'Playing It My Way',
  author:"Sachin Tendulkar",
  bookid: 108,
  price: 4,
  availableItems: 6,
  category: "Autobiography"
}, {
  key: '9',
  bookName: 'From Here to Eternity',
  author:"JAMES JONES",
  bookid: 109,
  price: 4,
  availableItems: 2,
  category: "Historical Fiction"
}, {
  key: '10',
  bookName: 'The Greatest Show on Earth: The Evidence for Evolution',
  author:"Richard Dawkins",
  bookid: 110,
  price: 2,
  availableItems: 1,
  category: "Science"
},{
  key: '11',
  bookName: "PUMPS FOR CHEMICAL PROCESSING",
  bookid: 111,
  author:"Viktor Frankl",
  price: 5,
  availableItems: 7,
  category: "Engineering"
}, {
  key: '12',
  bookName: 'India 2020',
  author:"Dr.A. P. J. Abdul Kalam",
  bookid:112,
  price: 4,
  availableItems: 8,
  category: "Vision"
}, {
  key: '13',
  bookName: 'My Last Test Match',
  author:"Sachin Tendulkar",
  bookid: 113,
  price: 4,
  availableItems: 6,
  category: "Sports"
}, {
  key: '14',
  bookName: 'NEURAL NETWORK MODELS - THEORY AND PROJECTS',
  author:"JAMES JONES",
  bookid: 114,
  price: 4,
  availableItems: 2,
  category: "Historical Fiction"
}, {
  key: '15',
  bookName: 'ADAPTIVE INTERNAL MODEL CONTROL',
  author:"Datta Aniruddha",
  bookid: 115,
  price: 2,
  availableItems: 1,
  category: "Engineering"
}];

class BookContainer extends Component {
    constructor(props) {
      super(props);
      var requestColumns = [{
        title: 'Book Name',
        dataIndex: 'bookName',
        key: 'bookName',
      }, {
        title: 'BookID',
        dataIndex: 'bookid',
        key: 'bookid',
      },{
        title: 'Author',
        dataIndex: 'author',
        key: 'author',
      },{
        title: 'Price($)',
        dataIndex: 'price',
        key: 'bookid',
      },{
        title: 'Available items',
        dataIndex: 'availableItems',
        key: 'bookid',
      },{
        title: 'Category',
        dataIndex: 'category',
        key: 'bookid',
      },{
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <Button 
            type="primary"
            onClick={this.requestConfirm.bind(this)}>Request Book</Button>          
          </span>
        ),
      }];
      var returnColumns = [{
        title: 'Book Name',
        dataIndex: 'bookName',
        key: 'bookName',
      }, {
        title: 'BookID',
        dataIndex: 'bookid',
        key: 'bookid',
      },{
        title: 'Author',
        dataIndex: 'author',
        key: 'author',
      },{
        title: 'Price($)',
        dataIndex: 'price',
        key: 'isbn',
      },{
        title: 'Category',
        dataIndex: 'category',
        key: 'isbn',
      },
      // {
      //   title: 'Quantity',
      //   dataIndex: 'availableItems',
      //   key: 'isbn',
      // },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <Button 
            type="primary"
            onClick={this.returnConfirm.bind(this)}>Return Book</Button>          
          </span>
        )
      }];
      this.state = {
        dataSource : defaultDataSource,
        updatedDataSource:  defaultDataSource,
        myBooksDataSource:[],// for search purpose
        updatedMyBooksDataSource:[],//persitence
        //dataSource:this.masterDataSource,    
        columns : requestColumns,
        returnColumns:returnColumns,
        selectedSearchType:"bookName" ,
        selectedRowKeys: [], 
        visible: false     
      };
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    this.setState({
      visible: false,
    });
    var updatedMyBooksDataSource = this.state.myBooksDataSource;
    var updatedBooksDataSource = [];
    var selectedKey = this.state.selectedRowKeys[0];
    var allowUpdate = true;
    this.state.updatedDataSource.forEach(function(dataSource) {  
          
        if(dataSource.key.toLowerCase() === selectedKey){
         
          if(dataSource.availableItems === 0)
            allowUpdate = false;
          dataSource.availableItems = allowUpdate ? dataSource.availableItems - 1 : 0;
          if(allowUpdate)
            updatedMyBooksDataSource.push(dataSource);
          else{
            alert("Out of stock");
            return false;
          }
        }
        updatedBooksDataSource.push(dataSource);
    });
    if(allowUpdate){
      this.setState({updatedDataSource:updatedBooksDataSource,myBooksDataSource:updatedMyBooksDataSource,selectedRowKeys:[],updatedMyBooksDataSource:updatedMyBooksDataSource});
      notification["success"]({
        message: 'Success',
        description: 'Book lended successfully.',
        duration:3
      });
  }
  }
  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }
 
  onSelectChange = (selectedRowKeys) => {    
    this.setState({ selectedRowKeys : selectedRowKeys});
  }
  requestConfirm(){
    if(this.state.selectedRowKeys.length > 0){
      this.setState({
        visible: true
      }); 
  }      
    else
      alert("Please select an item!");
  }
  returnConfirm(){
      
      //start
      if(this.state.selectedRowKeys.length > 0){
      var updatedMyBooksDataSource = this.state.myBooksDataSource;
      var updatedBooksDataSource = [];
      var selectedKey = this.state.selectedRowKeys[0];
     // var allowUpdate = true;
      this.state.updatedDataSource.forEach(function(dataSource) {  
            
          if(dataSource.key.toLowerCase() === selectedKey){
            dataSource.availableItems =  dataSource.availableItems + 1 ;
            updatedMyBooksDataSource.pop(dataSource);
          }
          updatedBooksDataSource.push(dataSource);
      });
        this.setState({updatedDataSource:updatedBooksDataSource,myBooksDataSource:updatedMyBooksDataSource,selectedRowKeys:[],updatedMyBooksDataSource:updatedMyBooksDataSource});
        notification["success"]({
          message: 'Success',
          description: 'Book returned successfully.',
          duration:3
        });
      }  else
        alert("Please select an item!");
      //end
  }

     filterDataSource(value,tabName){
       var valueLowerCase = value.trim().toLowerCase();
       var filteredDataSource = [];
       var selectedSearchType = this.state.selectedSearchType;
       if(tabName === "requestbooks"){
       defaultDataSource.forEach(function(dataSource) {
  
       if(dataSource[selectedSearchType].toString().toLowerCase().indexOf(valueLowerCase) !== -1)
          filteredDataSource.push(dataSource);
       });    
       this.setState({dataSource:filteredDataSource});
      }else{
        this.state.updatedMyBooksDataSource.forEach(function(dataSource) {          
          if(dataSource[selectedSearchType].toString().toLowerCase().indexOf(valueLowerCase) !== -1)
            filteredDataSource.push(dataSource);
          });    
          this.setState({myBooksDataSource:filteredDataSource});
      }
     }
     handleSearchTypeChange(e){
       this.setState({selectedSearchType:e});
     }
     resetSearch(tabName){
      if(tabName === "requestbooks")
        this.setState({dataSource:defaultDataSource});
      else
        this.setState({myBooksDataSource:this.state.updatedMyBooksDataSource});
     }
     render() {
        return (          
            <BookComponent
                {...{
                    book: {
                        dataSource: this.state.dataSource,
                        myBooksDataSource:this.state.myBooksDataSource,
                        columns: this.state.columns,
                        returnColumns: this.state.returnColumns,
                        selectedRowKeys: this.state
                    },
                    model:{
                      visible: this.state.visible                      
                    }
                }}
                onOk={this.handleOk.bind(this)}
                onCancel={this.handleCancel.bind(this)}
                returnConfirm={this.returnConfirm.bind(this)}
                resetSearch={this.resetSearch.bind(this)}
                handleSearchTypeChange={this.handleSearchTypeChange.bind(this)}
                filterDataSource={this.filterDataSource.bind(this)}
                onSelectChange={this.onSelectChange.bind(this)}
            />           
        );
    }
  }
    export default BookContainer;