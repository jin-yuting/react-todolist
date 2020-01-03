export default {
  pagination(data,callback){
    return {
      onChange:(current)=>{
        callback(current)
      },
      current:data.result.page,
      pageSize:data.result.pageSize,
      total:data.result.total,
      showTotal:()=>{
        return `共${data.total}条`
      },
      showQuickJumper:true
    }
  }
}