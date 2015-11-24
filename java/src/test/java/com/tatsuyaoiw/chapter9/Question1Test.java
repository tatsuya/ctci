package com.tatsuyaoiw.chapter9;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class Question1Test {
	private Question1 q;

	@Before
	public void before() throws Exception {
		q = new Question1();
	}

	@Test
	public void testFindIndex() throws Exception {
		int[] a1 = {1, 2, 3};
		int index = q.findIndex(a1, 1);
		assertEquals(0, index);
	}
}