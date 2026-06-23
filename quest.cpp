#include<iostream>
using namespace std;
int main(){
    int k = 31;
    int sum = 0;
    for(int i=1;i<=k;i++){
        sum += i*i;
    }
    cout<<sum<<endl;
    return 0;
}