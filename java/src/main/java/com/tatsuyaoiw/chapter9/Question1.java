package com.tatsuyaoiw.chapter9;

public class Question1 {

	void merge(int[] a, int[] b) {
		// TODO
	}

	int findIndex(int[] a, int n) {
		for (int i = 0; i < a.length; i++) {
			int e = a[i];
			if (n <= e) {
				return i;
			}
		}
		return a.length;
	}
}
