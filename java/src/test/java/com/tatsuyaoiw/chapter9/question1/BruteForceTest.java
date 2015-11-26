package com.tatsuyaoiw.chapter9.question1;

import org.junit.Before;
import org.junit.Test;

import java.util.Arrays;

import static org.junit.Assert.*;

public class BruteForceTest {
	private BruteForce q;

	@Before
	public void before() throws Exception {
		q = new BruteForce();
	}

	@Test
	public void testMerge() throws Exception {
		int[] a = new int[20];
		for (int i = 0; i < 10; i++) {
			a[i] = i+1;
		}

		int[] b = {3, 6, 9, 12};
		q.merge(a, b);
		assertEquals("[1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 9, 10, 12, 0, 0, 0, 0, 0, 0]", Arrays.toString(a));
	}

	@Test
	public void testFindIndex() throws Exception {
		int[] a = {1, 2, 3};
		int ai = q.findIndex(a, 1);
		assertEquals(0, ai);

		int[] b = {1, 3, 5};
		int bi = q.findIndex(b, 4);
		assertEquals(2, bi);

		int[] c = {1, 2, 3};
		int ci = q.findIndex(c, 4);
		assertEquals(3, ci);
	}
}