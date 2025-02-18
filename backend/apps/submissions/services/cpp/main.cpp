#include <iostream>
#include <unordered_map>
#include <set>
using namespace std;

int main() {
    int num;
    unordered_map<int, int> frequency;
    
    // Read input integers until end of input
    while (cin >> num) {
        frequency[num]++;
    }
    
    // Use a set to check for unique frequency counts
    set<int> freqSet;
    for (const auto &pair : frequency) {
        // If the frequency already exists in the set, then it's not unique
        if (!freqSet.insert(pair.second).second) {
            cout << "false";
            return 0;
        }
    }
    
    cout << "true";
    return 0;
}