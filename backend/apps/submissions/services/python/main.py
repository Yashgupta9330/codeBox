def uniqueOccurrences(arr):
    from collections import Counter
    occurrences = Counter(arr).values()
    return len(occurrences) == len(set(occurrences))

if __name__ == "__main__":
    arr = list(map(int, input().split()))
    print(uniqueOccurrences(arr))