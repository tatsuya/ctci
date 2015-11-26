package com.tatsuyaoiw.chapter9.question1;

public class BruteForce {

	void merge(int[] a, int[] b) {
		for (int bi = 0; bi < b.length; bi++) {
			int newIndex = findIndex(a, b[bi]);
			for (int ai = getLength(a); ai > newIndex; ai--) {
				a[ai] = a[ai-1];
			}
			a[newIndex] = b[bi];
		}
	}

	int findIndex(int[] a, int n) {
		int len = getLength(a);
		for (int i = 0; i < len; i++) {
			int e = a[i];
			if (n <= e) {
				return i;
			}
		}
		return len;
	}

	int getLength(int[] a) {
		int len = 0;
		for (int i = 0; i < a.length; i++) {
			if (a[i] == 0) {
				break;
			}
			len++;
		}
		return len;
	}
}
