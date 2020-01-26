import React from 'react';
import { connect } from 'react-redux';
import './BlockItem.css';
import getData from '../../../../store/actions/getData';
import fieldСheck from '../../../../utils/fieldСheck';


function BlockItem(props) {
  const {id, idList, valueList, conditions, clearField, errorItem, getData} = props;
  const indexId = idList.indexOf(id);
  const valueId = valueList[indexId];
  const value = valueId !== 0 ? valueId : '';
  const checkItem = (event) => {
    const value = event.target.value.replace(/[^1-9]/, 0);
    const {id} = event.target;
    const indexId = idList.indexOf(id);
    const newValueList = valueList;
    newValueList[indexId] = +value;
    const checkField = fieldСheck(idList, newValueList, conditions);
    getData(newValueList, checkField[0], checkField[1]);
  }
  const style = errorItem.includes(id) ? 'block-item-div error': 'block-item-div';
  return(
    <div className={style} id={id + id} clear={'' + clearField}>
       <input type='text'
              name='name'
              value={value}              
              autoComplete='off'
              maxLength='1'
              className='block-item-input'
              id={id}
              onChange={checkItem}
       />
    </div>
  ) 
}
const mapStateToProps = (state) => {
  return {
    valueList: state.valueList,
    idList: state.idList,
    conditions: state.conditions,
    clearField: state.clearField,
    errorItem: state.errorItem
  }
};
const mapDispatchToProps = {
  getData: getData
};

export default connect(mapStateToProps, mapDispatchToProps)(BlockItem)



      
      


