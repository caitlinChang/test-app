import React from 'react';
import { Tree } from 'antd'
import { isArray, isObject } from 'lodash';

export default function ParseTree(){
    let treeData = []

    // function parseData(data: any){
    //     if(isObject(data)){
    //         if(isArray(data)){
    //             return data.map((item,index) => {
    //                 const children = [parseData(item)]
    //                 return {
    //                     key:'',
    //                     title:index,
    //                     children
    //                 }
    //             })
    //         }else {
    //             Object.keys(data).map(key => {
    //                 const children = [parseData(data[key])]
    //                 return {
    //                     key:key,
    //                     title:key,
    //                     children
    //                 }
    //             })
    //         }
    //     }else{
    //         return data
    //     }
        
    // }
    return <Tree />
}